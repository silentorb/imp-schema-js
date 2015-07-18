window.realm = window.realm || {}
realm.Dungeon = function() {}
realm.Dungeon.prototype = {}
realm.Dungeon.prototype.name = ''
realm.Dungeon.prototype.owner = null
realm.Dungeon.prototype.parent = null
realm.Dungeon.prototype.children = []
realm.Dungeon.prototype.portals = []
realm.JSON_Summoner = function() {}
realm.JSON_Summoner.prototype = {}
realm.JSON_Summoner.prototype.load = function(json) {
}
realm.Portal = function() {}
realm.Portal.prototype = {}
realm.Portal.prototype.name = ''
realm.Portal.prototype.parent = null
realm.Portal.prototype.profession = null
window.realm.Profession = window.realm.Profession || {}