import { z } from "zod"

/** TODO: Define a Zod schema for the form
It should contain:
- identities for the user & pet completing the form ( userId, petId )
- details about the issue that the pet is facing:

Issue type: Sick/unwell
Issue subtype: the specific problem (ears | eyes | nose | lump)
Symptoms: free text from the user describing the pets symptoms
Anything else?: additional context provided by the user

Issue type: Weight check
Weight: current weight of the pet in kilograms

Issue type: Post-surgery follow up
Issue subtype: which surgery did the pet have (neutering | dental)
Pet condition: free text describing the pets condition
*/

export const TriageFormSchema = z.object({
  formId: z.literal("triage"),
  email: z.string()
})
