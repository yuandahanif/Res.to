// interface PageI{
//   render(): string;
//   afterRender(): void;
// }

abstract class PageI {
  abstract async render() : Promise<string>

  abstract async afterRender(): Promise<any>
}

export default PageI;
