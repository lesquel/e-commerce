import { InfoBasicEntity } from "@app/shared/models"

export interface Product extends InfoBasicEntity {
    name: string
    description:string
    amount: number
    individualPrice: number
}