import { mat4 } from "gl-matrix";

export enum object_type{
    TRIANGLE,
    QUAD
}

export interface RenderData{
    view_transform: mat4;
    model_transform: Float32Array;
    object_counts: { [obj in object_type]: number }
}