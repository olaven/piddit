export default interface IListItemProps{
    name : string; 
    onClicked: (event: React.MouseEvent<HTMLInputElement>) => void
}