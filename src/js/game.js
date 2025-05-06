import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Game extends Engine {

    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")

        // for (let i = 0; i < 10; i++) {

        // const fish = new Actor()
        // fish.graphics.use(Resources.Fish.toSprite())
        // fish.pos = new Vector(Math.random() * 1280, Math.random() * 720)
        // fish.vel = new Vector(Math.random() * 400-100, Math.random() * 400- 100)
        
        // this.add(fish)

        // }
 for (let i = 0; i < 100; i++) {
        const femBoy = new Actor()
        femBoy.graphics.use(Resources.Femboy.toSprite())
        femBoy.pos = new Vector(Math.random() * 1280, Math.random() * 720)
        femBoy.vel = new Vector(Math.random() * 400-100, Math.random() * 400- 100)
        femBoy.scale = new Vector( Math.random(), Math.random())
        this.add(femBoy)
        femBoy.events.on("exitviewport", (e) => this.fishLeft(e))
        
 }
         
         
    }

    fishLeft(e) {
        e.target.pos = new Vector(Math.random() * 1280, Math.random() * 720)
        e.target.vel = new Vector(Math.random() * 400-100, Math.random() * 400- 100)
    }
}

new Game()
