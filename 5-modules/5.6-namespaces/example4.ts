// Extending a library that already uses namespaces
namespace Express {
  export interface Request {
    user?: { id: string; role: string };
  }
}
