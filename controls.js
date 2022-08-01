class Controls{
    constructor(){
        this.forward=false
        this.left=false
        this.right=false
        this.reverse=false

        this.#addKeyboardListeners();
    }
    #addKeyboardListeners(){
        document.onkeydown=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left=true
                    break
                case "ArrowRight":
                    this.right=true
                    break
                case "ArrowUp":
                    this. forward=true
                    break
                case "ArrowDown":
                    this.reverse=true
                    break       
            }
            console.table(this)
        }
        document.onkeyup=(event)=>{ //ha az arrowfunciont használod, akkor a funkció vissza tud nyúlni a fentiekhez
            switch(event.key){
                case "ArrowLeft":
                    this.left=false
                    break
                case "ArrowRight":
                    this.right=false
                    break
                case "ArrowUp":
                    this. forward=false 
                    break
                case "ArrowDown":
                    this.reverse=false
                    break       
            }
            console.table(this)
        }
    }
}