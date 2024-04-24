class Tv {
  private _brand: string;
  private _size: string;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(b: string, s: string, r: string, c: string[]) {
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = c;
  }

  turnOn(): void {
    console.log(`
    Brand: ${this._brand}
    Size: ${this._size}
    Resolution: ${this._resolution}
    Connections: ${this._connections}
    `);
  }

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  set connectedTo(conn: string | undefined) {
    if (!conn || this._connections.includes(conn)) {
      this._connectedTo = conn;
      console.log(`Connected to: ${this._connectedTo}`);
      
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const tv = new Tv('Samsung', '65 polegadas', '4k', ['internet']);
console.log(tv.turnOn());
