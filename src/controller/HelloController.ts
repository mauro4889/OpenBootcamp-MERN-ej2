import { LogSuccess } from "../utils/logger";
import { IHelloController } from "./interfaces";
import { BasicResponse } from "./types";


export class HelloController implements IHelloController{
    
    async getMessage(name: any): Promise<BasicResponse> {

        LogSuccess('[/api/hello] Get Request')

        return {
            message: `Hello, ${name || 'Wolrd!'}`
        }
    }
    
}