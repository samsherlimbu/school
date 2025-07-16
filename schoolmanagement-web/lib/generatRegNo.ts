interface RegNoOptions {
  sponsorshipType: 'PS' | 'SS'; // PS = Public Sponsored, SS = Self Sponsored
  sequence: number; // Must be 1 - 9999
}

export default function generateRegistrationNumber(sequence:number,sponsorshipType:string,): string {
  // const { sponsorshipType, sequence, year } = options;

  if (sequence < 1 || sequence > 9999) {
    throw new Error("Sequence number must be between 1 and 9999.");
  }

  const paddedSequence = sequence.toString().padStart(4, '0');

  // If year is provided, use it; otherwise use current year
  const year =new Date().getFullYear();

  // Format: PS/2025/0001 or SS/2024/0035
  const registrationNumber = `${sponsorshipType}${year}${paddedSequence}`;

  return registrationNumber;
}
