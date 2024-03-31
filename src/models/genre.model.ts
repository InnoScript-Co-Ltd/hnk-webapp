type IconType = {
    id: string,
    image: string;
}

export interface IGenrereResponse {
    id: string;
    icon: IconType | null;
    name: string;
    rate: string;
    color: string;
    status: string;
}