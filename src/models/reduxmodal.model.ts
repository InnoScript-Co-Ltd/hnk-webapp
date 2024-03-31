export interface IModal{
    isOpen: boolean;
    title: string;
    message: string;
    theme: 'success' | 'fail';
}