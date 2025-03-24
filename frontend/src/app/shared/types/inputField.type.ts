export interface IInputField {
    name: string;
    label: string;
    type: "text" | "email" | "password" | "checkbox"
    placeholder?: string
}  