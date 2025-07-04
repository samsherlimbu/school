import React from "react"; 
import SubmitButton from "@/components/FormInputs/submitButton";
import CloseButton from "@/components/FormInputs/closeButton";
  
 
export default function FormFooter({
href,
editingId,
loading,
title,
parent,
}: {
href: string,
editingId: string | undefined,
loading: boolean,
title: string,
parent?: string,
}) {
return (
<div className="flex items-center  gap-2 py-4 justify-between ">
  <CloseButton href={href} parent={parent} />
  <SubmitButton
    title={editingId ? `Update ${title}` : `Save ${title}`}
    loading={loading}
  />
</div>
);
}
 