export default interface IListItemProps{
    name : string; 
    onSelected: () => void; 
    onRemoved: () => void
}