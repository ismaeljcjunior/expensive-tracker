

export type Category = {
    [tag: string]: {//"tag" para alterar "nome padrao da tipagem"
        title: string;
        color: string;
        expense: boolean;
    }
}