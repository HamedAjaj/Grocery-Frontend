import { environment } from "src/environments/environment";

export class Endpoints {
    static readonly USER: string = environment.APIUrl + 'User';
    static readonly CATEGORY: string = environment.APIUrl + 'category';
    static readonly SUBCATEGORYS: string = environment.APIUrl + 'SubCategorys';

}
