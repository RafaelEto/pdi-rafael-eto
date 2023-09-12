import type { FunctionComponent } from "react";

type GenericObject = Record<string, any>

declare global {
    interface StoreFrontFC<P = GenericObject> extends FunctionComponent<P> {
        getSchema?(props: P): GenericObject
        schema?: GenericObject
    }
}