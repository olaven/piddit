export default interface ISearchbarProps {
    visible: boolean,
    actionOnInput?: (event: React.ChangeEvent<HTMLInputElement>) => any,
    placeholder?: string
}