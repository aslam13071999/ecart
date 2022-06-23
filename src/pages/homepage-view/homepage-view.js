import React from 'react';
import { FooterComponent } from '../../components/footer-component/footer-component';
import { HeaderComponent } from '../../components/header-component/header-component';

export class HomePageView extends React.Component {
    render() {
        return(
            <div>
                <HeaderComponent> </HeaderComponent>
                
                <FooterComponent> </FooterComponent>

            </div>

        )
    } 
}