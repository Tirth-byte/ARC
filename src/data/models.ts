export type QuestStatus = 'NOT_STARTED' | 'LEARNING' | 'COMPLETED' | 'REVIEW_NEEDED' | 'ALMOST' | 'MASTERED'

export interface Phase { id:string; romanNumeral:string; name:string; centralQuestion:string; description:string; order:number; status:QuestStatus }
export interface Quest { id:string; phaseId:string; day:number; date:string; title:string; bigQuestion:string; learningTargets:string[]; paperTask:string; conceptIds:string[]; status?:QuestStatus; startedAt?:string; completedAt?:string; masteredAt?:string; isBossFight:boolean }
export interface PaperImage { name:string; data:string }
export interface DailyReflection { questId:string; understood:string; confused:string; connections:string; newQuestions:string[]; paperImages:PaperImage[]; createdAt:string }
export interface Concept { id:string; name:string; description:string; phaseId:string; questIds:string[]; relatedConceptIds:string[]; mastery:QuestStatus; firstEncountered?:string; lastReviewed?:string }
export interface Review { id:string; conceptId?:string; questId:string; question:string; answer:string; result:'Correct'|'Partial'|'Incorrect'; reviewedAt:string }
export interface Question { id:string; questId:string; text:string; resolved:boolean; notes?:string }
