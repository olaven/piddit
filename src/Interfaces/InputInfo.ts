export default interface InputInfo {
    placeholder? : string; 
    onInput : (event : React.ChangeEvent<HTMLInputElement>) => any; 
}