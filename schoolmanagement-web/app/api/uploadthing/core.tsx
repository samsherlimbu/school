import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

// Reusable middleware
const middleware = async ({ req }: { req: Request }) => {
  const user = await auth(req);
  if (!user) throw new UploadThingError("Unauthorized");
  return { userId: user.id };
};

// Reusable onUploadComplete
const onUploadComplete = async ({ metadata, file }: { metadata: { userId: string }, file: { url: string } }) => {
  console.log("Upload complete for userId:", metadata.userId);
  console.log("file url", file.url);
  return { uploadedBy: metadata.userId };
};

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Route for student profile images
  studentProfileImage: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(middleware)
    .onUploadComplete(onUploadComplete),


    //Route for school logo images
    schoolLogo: f({
      image: {
        maxFileSize: "1MB",
        maxFileCount: 1,
      },
    })
      .middleware(middleware)
      .onUploadComplete(onUploadComplete),

  // Route for parent profile images
  parentProfileImage: f({
    image: {
      maxFileSize: "1MB",
      maxFileCount: 1,
    },
  })
    .middleware(middleware)
    .onUploadComplete(onUploadComplete),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;