import { InMemoryDbService } from "angular-in-memory-web-api";
import { Category } from "./pages/categories/shared/category.model";
export class InMemoryDatabase implements InMemoryDbService{
    createDb(){
        const categories = [
            { id: 1, name: "Moradia", descripition: "Pagamento de conta de casa"},
            { id: 2, name: "Saúde", descripition: "Plano de Saúde e Remédios"},
            { id: 3, name: "Lazer", descripition: "Cinema, parque, clube, restaurantes etc."},
            { id: 4, name: "Salário", descripition: "Recebimento de Salário"},
            { id: 5, name: "Freelas", descripition: "Trabalhos como freelancer"}          
        ];
        return { categories }
    }
}