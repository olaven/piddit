import * as React from 'react';

// Styles
import './Sidebar.css';


interface ISidebarProps {
    // source, alt 
    header?: string, 
            // text,    action
    options: Array<{
        text: string,
        action: () => void
    }>
}

class Sidebar extends React.Component<ISidebarProps> {
    
    public render() {
        return <div className="Sidebar">
            <h2>
                {this.props.header}
            </h2>
            <ul>
                {this.renderOptions()}
            </ul>
        </div>
    }

    /**
     * Renders the options of this sidebar
     */
    private renderOptions() {
        return this.props.options.map(option => {
            return <div onClick={option.action} className="option" key={option.text}>{option.text}</div>
        })
    }
}

export default Sidebar;
