window.imp = window.imp || {}
window.imp.schema = window.imp.schema || {}
imp.schema.Dungeon = function() {}
imp.schema.Dungeon.prototype = {}
imp.schema.Dungeon.prototype.name = ''
imp.schema.Dungeon.prototype.owner = null
imp.schema.Dungeon.prototype.parent = null
imp.schema.Dungeon.prototype.children = []
imp.schema.Dungeon.prototype.portals = []
imp.schema.Schema_Source = function() {}
imp.schema.Schema_Source.prototype = {}
imp.schema.Schema_Source.prototype.trellises = []
window.imp.schema.Trellis_Source = window.imp.schema.Trellis_Source || {}
imp.schema.JSON_Summoner = function() {}
imp.schema.JSON_Summoner.prototype = {}
imp.schema.JSON_Summoner.prototype.load = function(json, dungeon) {
  if (json.trellises != null)
    for (var trellis in json.trellises) {
    }
}
imp.schema.Portal = function() {}
imp.schema.Portal.prototype = {}
imp.schema.Portal.prototype.name = ''
imp.schema.Portal.prototype.parent = null
imp.schema.Portal.prototype.profession = null
window.imp.schema.Profession = window.imp.schema.Profession || {}