/* GopherGfx App Template
 * CS 4388, Fall 2024, Texas State University
 * Instructor: Isayas Berhe Adhanom <isayas@txstate.edu>
 * License: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 */ 

import * as gfx from 'gophergfx'

export class App extends gfx.GfxApp
{
    private testBox:gfx.Mesh2;

    // --- Create the App class ---
    constructor()
    {
        // initialize the base class gfx.GfxApp
        super();
        this.testBox = gfx.Geometry2Factory.createBox();
    }


    // --- Initialize the graphics scene ---
    createScene(): void 
    {
        this.scene.add(this.testBox);
        this.renderer.background = new gfx.Color(0,0,1,1);
        this.testBox.material.color = new gfx.Color(0.5,0.5,0,1);

        this.testBox.position.set(0,0);

        this.testBox.rotation = gfx.MathUtils.degreesToRadians(45);
    }

    
    // --- Update is called once each frame by the main graphics loop ---
    update(deltaTime: number): void 
    {
        this.testBox.rotation -= 0.01;
    }
}