/**
 * Copyright (c) 2026 Jindrich Vavruska 
 * Licensed under the MIT License (MIT), see LICENSE.txt in the repository root for details.
 */

/**
 * A Map with Buffer keys that compares key content instead of reference
 * @template V
 */
export class BufferMap<V> extends Map<Buffer, V> {
  /**
   * Compares key content instead of reference
   * @param {Buffer} key 
   * @returns 
   */
  has(key: Buffer): boolean {
    for (const k of this.keys()) {
      if (k.equals(key)) {
        return true;
      }
    }
    return false; 
  }
  /**
   * Compares key content instead of reference
   * @param {Buffer} key 
   * @returns 
   */
  get(key: Buffer): V | undefined {
    for (const [k, v] of this.entries()) {
      if (k.equals(key)) {
        return v;
      }
    }
    return undefined;
  }
  /**
   * Compares key content instead of reference
   * @param {Buffer} key  
   * @param {V} value 
   * @returns 
   */
  set(key: Buffer, value: V): this {
    for (const k of this.keys()) {
      if (k.equals(key)) {
        super.set(k, value);
        return this;
      }
    }
    super.set(key, value);
    return this;
  }
  /**
   * Compares key content instead of reference
   * @param {Buffer} key 
   * @returns 
   */
  delete(key: Buffer): boolean {
    for (const k of this.keys()) {
      if (k.equals(key)) {
        return super.delete(k);
      }
    }
    return false;
  } 
}

/**
 * A Set with Buffer values that compares value content instead of reference
 */
export class BufferSet extends Set<Buffer> {
  /**
   * Compares value content instead of reference
   * @param {Buffer} value  
   * @returns 
   */
  has(value: Buffer): boolean {
    for (const v of this.values()) {
      if (v.equals(value)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Compares value content instead of reference
   * @param {Buffer} value
   * @return {this}
   */
  add(value: Buffer): this {  
    for (const v of this.values()) {
      if (v.equals(value)) {
        return this;
      }
    }
    super.add(value);
    return this;
  }
  /**
   * Compares value content instead of reference
   * @param {Buffer} value
   * @return {boolean}
   */
  delete(value: Buffer): boolean {
    for (const v of this.values()) {
      if (v.equals(value)) {
        return super.delete(v);
      }
    }
    return false;
  }
}
