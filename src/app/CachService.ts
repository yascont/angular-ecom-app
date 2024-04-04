import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() {}

  set(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  get(key: string): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  getAll(): { [key: string]: any } {
    const result: { [key: string]: any } = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        result[key] = this.get(key);
      }
    }
    return result;
  }

  updateCount(key: string, newCount: number): void {
    const cachedData = this.get(key);
    if (cachedData) {
      cachedData.count = newCount;
      this.set(key, cachedData);
    }
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}