export type Color = string;

export interface ColorEntity {
    color: Color;
}

export interface PlayerEntity {
    name: string;
    color: Color;
    base: Set<BodyEntity>;
}

export interface BodyEntity {
    position: {
        x: number;
        y: number;
    };
    radius: number;
    originalColor: ColorEntity;
    owner?: PlayerEntity;
}

export interface WorldEntity {
    originalColors: Set<ColorEntity>;
    players: Set<PlayerEntity>;
    bodies: Set<BodyEntity>;
    currentPlayerIndex: number;
}