# Angular router-outlet left/right slide animation

[View on StackBlitz ⚡️](https://stackblitz.com/edit/github-8x1l6h)

Angular Router-outlet animation on same component on url props change  
 ```
    const routes: Routes = [
    {
      path: "type/:id",
      component: ScienceComponent,
      resolve: {
        num: CustomResolver
      },
    },
    {
      path: "sports",
      loadChildren: "./modules/sports/sports.module#SportsModule"
    },
    { path: "**", redirectTo: "" }
  ];
 ```

Implement custom reuse-strategy..
and setup animation