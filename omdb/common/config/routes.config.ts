import express from 'express';

export abstract class RoutesConfig {
    public readonly app: express.Application;
    public readonly name: string;

    constructor(app: express.Application, name: string) {
        this.app = app;
        this.name = name;
        this.routes();
    }

    getName() {
        return this.name;
    }
    
    abstract routes(): express.Application;
}