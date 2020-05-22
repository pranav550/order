export class Location {
    lat: number;
    lng: number;
}

export class Northeast {
    lat: number;
    lng: number;
}

export class Southwest {
    lat: number;
    lng: number;
}

export class Viewport {
    northeast: Northeast;
    southwest: Southwest;
}

export class Geometry {
    location: Location;
    viewport: Viewport;
}

export class Candidate {
    formatted_address: string;
    geometry: Geometry;
    name: string;
}

export class Maps {
    candidates: Candidate[];
    status: string;
}
