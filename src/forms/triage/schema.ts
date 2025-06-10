import { z } from "zod"

/** 
 * TODO: Define a Zod schema for the SNOOTS veterinary triage form (see src/forms/triage/triage-form-design.png)
 * 
 * Based on the mobile app designs, this is a multi-step conditional form where
 * different paths lead to different required fields. You'll need to design a schema
 * that can validate the final form submission.
 * 
 * Key design decisions to consider:
 * - How do you handle the branching logic in your schema?
 * - What's the best way to represent optional vs required fields based on the path taken?
 * - Should you validate individual steps or the complete form submission?
 * 
 * Form Flow Analysis:
 * 1. Initial issue selection (dropdown with options like "Vomiting and/or diarrhoea", "Eye issue", etc.)
 * 2. Follow-up questions based on selection
 * 3. Additional context (free text)
 * 4. Conditional branches for specific scenarios
 * 
 * Key Fields Identified:
 * - Primary issue/symptom selection
 * - Free text symptom description  
 * - Reason for visit ("My pet is unwell", "Post-operative check", "Weight check for flea & worming")
 * - Surgery type (if post-op): "Bitch spay", "Dog castrate", "Cat spay", "Cat castrate", "Other"
 * - Surgery timing: "0-3 days" vs "More than 3 days"
 * - Recovery assessment (multiple choice for post-surgery)
 * - Previous flea/worm treatment: Yes/No
 * - Weight entry (kg) - conditional field
 * 
 * Consider: What's your strategy for handling this complex conditional logic?
 */

// Example potential data structures - you might take a different approach:

const exampleSickPet = {
  formId: "triage",
  userId: "user-123",
  petId: "pet-456",
  reasonForVisit: "My pet is unwell",
  primaryIssue: "Vomiting and/or diarrhoea", 
  symptomDescription: "Has been sick 3 times today and won't eat",
  // ... other conditional fields
}

const examplePostSurgery = {
  formId: "triage", 
  userId: "user-789",
  petId: "pet-101",
  reasonForVisit: "Post-operative check",
  surgeryType: "Bitch spay",
  surgeryTiming: "More than 3 days",
  recoveryStatus: "My pet is recovering well and the wound appears clean and dry",
  // ... other conditional fields
}

const exampleWeightCheck = {
  formId: "triage",
  userId: "user-456", 
  petId: "pet-789",
  reasonForVisit: "Weight check for flea & worming",
  hadPreviousTreatment: true,
  currentWeight: 4.2,
  // ... other conditional fields  
}

export const TriageFormSchema = z.object({
  formId: z.literal("triage"),
  email: z.string()
})
