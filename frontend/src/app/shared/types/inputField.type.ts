export interface InputField {
    name: string;
    label: string;
    type: "text" | "email" | "password" | "checkbox"
    placeholder?: string
}  