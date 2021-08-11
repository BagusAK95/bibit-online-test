import express from 'express';

export abstract class RoutesConfig {
    private readonly app: express.Application;
    private readonly name: string;

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