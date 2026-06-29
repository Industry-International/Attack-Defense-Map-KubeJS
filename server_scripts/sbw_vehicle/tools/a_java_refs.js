// ============================================================
// SBW 载具 - Java 类引用 & 运行时状态
//
// 使用 'a_' 前缀确保优先加载，使 var 声明的类引用全局可见。
// 其他 tools/*.js 文件可直接使用这些引用，无需重复声明。
// ============================================================

var $UUID = Java.loadClass('java.util.UUID')
var $ListTag = Java.loadClass('net.minecraft.nbt.ListTag')
var $FloatTag = Java.loadClass('net.minecraft.nbt.FloatTag')
var $StringTag = Java.loadClass('net.minecraft.nbt.StringTag')
var $DoubleTag = Java.loadClass('net.minecraft.nbt.DoubleTag')
var $LongTag = Java.loadClass('net.minecraft.nbt.LongTag')
var $ShortTag = Java.loadClass('net.minecraft.nbt.ShortTag')
// ★ $IntTag, $ByteTag, $CompoundTag 不在本文件声明——
//   profession/config/a_tacz_config.js 已用 const 声明它们，
//   此处重复声明会导致 "redeclaration of const" 错误。
var $HashMap  = Java.loadClass('java.util.HashMap')
var $HashSet  = Java.loadClass('java.util.HashSet')
var $Component = Java.loadClass('net.minecraft.network.chat.Component')
var $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
var $ArrayList = Java.loadClass('java.util.ArrayList')

/** 已启用 ActionBar 的玩家集合 */
var $actionBarPlayers = new $HashSet()
