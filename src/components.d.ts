/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ComponentPreview {
    }
}
declare global {
    interface HTMLComponentPreviewElement extends Components.ComponentPreview, HTMLStencilElement {
    }
    var HTMLComponentPreviewElement: {
        prototype: HTMLComponentPreviewElement;
        new (): HTMLComponentPreviewElement;
    };
    interface HTMLElementTagNameMap {
        "component-preview": HTMLComponentPreviewElement;
    }
}
declare namespace LocalJSX {
    interface ComponentPreview {
    }
    interface IntrinsicElements {
        "component-preview": ComponentPreview;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "component-preview": LocalJSX.ComponentPreview & JSXBase.HTMLAttributes<HTMLComponentPreviewElement>;
        }
    }
}