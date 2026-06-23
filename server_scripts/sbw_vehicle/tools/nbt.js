// ============================================================
// SBW 载具 - JSON → NBT 转换工具
// ============================================================

function toNBT(obj) {
  if (obj === null || obj === undefined) return null
  if (typeof obj === 'object' && obj !== null && obj.__nbt_type) {
    switch (obj.__nbt_type) {
      case 'byte':   return $ByteTag.valueOf(obj.value)
      case 'short':  return $ShortTag.valueOf(obj.value)
      case 'long':   return $LongTag.valueOf(obj.value)
      case 'double': return $DoubleTag.valueOf(obj.value)
      case 'float':  return $FloatTag.valueOf(obj.value)
      default:       return $IntTag.valueOf(obj.value)
    }
  }
  if (typeof obj === 'object' && !Array.isArray(obj)) {
    let tag = new $CompoundTag()
    for (let key in obj) {
      if (!Object.prototype.hasOwnProperty.call(obj, key)) continue
      let val = toNBT(obj[key])
      if (val !== null) tag.put(key, val)
    }
    return tag
  }
  if (Array.isArray(obj)) {
    let list = new $ListTag()
    for (let i = 0; i < obj.length; i++) {
      let val = toNBT(obj[i])
      if (val !== null) list.add(val)
    }
    return list
  }
  if (typeof obj === 'string') return $StringTag.valueOf(obj)
  if (typeof obj === 'number') {
    return Number.isInteger(obj) ? $IntTag.valueOf(obj) : $FloatTag.valueOf(obj)
  }
  if (typeof obj === 'boolean') return $ByteTag.valueOf(obj)
  return null
}

function mergeDeployNBT(target, source) {
  if (!source || typeof source !== 'object') return
  for (let key in source) {
    if (!Object.prototype.hasOwnProperty.call(source, key)) continue
    let existing = target.get(key)
    let incoming = toNBT(source[key])
    if (incoming === null) continue
    if (existing && existing instanceof $CompoundTag && incoming instanceof $CompoundTag) {
      let incomingKeys = incoming.getAllKeys()
      let iter = incomingKeys.iterator()
      while (iter.hasNext()) {
        let subKey = iter.next()
        existing.put(subKey, incoming.get(subKey))
      }
    } else {
      target.put(key, incoming)
    }
  }
}
