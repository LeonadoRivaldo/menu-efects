
type MenuOptions = IMenuOptions | undefined;
interface IMenuOptions{
    styleMode?:boolean;
    cssMode?:boolean;
    customClass?:string;
    queryString:string;
} 

class MenuSateManager{

    private static readonly localStorageKey = '_menuActiveID';

    menuBtns:Element[] = [];
    options:MenuOptions;

    constructor(options:MenuOptions){
        this.options = options;
    }



    private persistActive(value:string):void{
        window.sessionStorage.setItem( MenuSateManager.localStorageKey, value );
    }

    private getActive():string | null{
        return window.sessionStorage.getItem(MenuSateManager.localStorageKey);
    }   

    private addMenuEventListenners(startingState?:any):void{

        


    }



    init(){
        this.addMenuEventListenners(this.getActive());
    }

}