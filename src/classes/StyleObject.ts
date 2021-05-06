export interface StyleObjectInterface {
    styles: Object;
    merge(target: StyleObjectInterface, source: StyleObjectInterface): StyleObjectInterface;
}

export abstract class StyleObject implements StyleObjectInterface {
    styles = {};
    merge(...objects: StyleObjectInterface[]) {
        return Object.assign({}, this.styles, ...objects);
    }
}
