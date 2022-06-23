import React from 'react';
import { FooterComponent } from '../../components/footer-component/footer-component';
import { HeaderComponent } from '../../components/header-component/header-component';

export class CartView extends React.Component {
    render() {
        return(
            <div>
                <HeaderComponent> </HeaderComponent>
                cart view
                <FooterComponent> </FooterComponent>

            </div>

        )
    } 
}