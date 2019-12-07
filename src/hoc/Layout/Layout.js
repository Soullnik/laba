import React, {Component} from 'react'
import classes from './Layout.module.css'
import MenuTogggle from '../../components/Navigation/MenuToggle/MenuToggle'
import Drawer from '../../components/Navigation/Drawer/Drawer'
import Chat from '../../containers/Chat/Chat'

class Layout extends Component {

    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }

    render() {
        return (
            <div className={classes.Layout}>
                 
                <Chat isOpen={this.state.menu}
                onClose={this.menuCloseHandler} />  

           
            
                <Drawer 
                isOpen={this.state.menu}
                onClose={this.menuCloseHandler}
                />


                <MenuTogggle
                onToggle={this.toggleMenuHandler}
                 isOpen={this.state.menu}

                 
                 />

                <main>
                    {this.props.children }
                </main>
            </div>
        )
    }
}

export default Layout 