import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentSelection = 0;

  images = [
    {
      title: 'Porche',
      imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      imageDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vitae ad magni officiis provident obcaecati, molestias alias ullam tempora repellendus'
    },
    {
      title: 'Audi',
      imageUrl: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      imageDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vitae ad magni officiis provident obcaecati, molestias alias ullam tempora repellendus'
    },
    {
      title: 'Aston Martin',
      imageUrl: 'https://images.unsplash.com/photo-1618486613525-c694bf152b2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      imageDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vitae ad magni officiis provident obcaecati, molestias alias ullam tempora repellendus'
    },
    {
      title: 'Rang Rover',
      imageUrl: 'https://images.unsplash.com/photo-1555941543-b520c9801036?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      imageDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vitae ad magni officiis provident obcaecati, molestias alias ullam tempora repellendus'
    },
    {
      title: 'Mercedes Benz AMG',
      imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      imageDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vitae ad magni officiis provident obcaecati, molestias alias ullam tempora repellendus'
    },
    {
      title: 'Mercedes Benz CLA250 4MATIC',
      imageUrl: 'https://images.unsplash.com/photo-1614453059835-f43a489a08ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      imageDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vitae ad magni officiis provident obcaecati, molestias alias ullam tempora repellendus'
    },
    {
      title: 'Toyota Tacoma ',
      imageUrl: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1151&q=80',
      imageDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vitae ad magni officiis provident obcaecati, molestias alias ullam tempora repellendus'
    }
  ];
  checkPaginationPosition(index: number) {
    return Math.abs(this.currentSelection - index) < 5;
  }
}
