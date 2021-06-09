package knex;

typedef DeferredKeySelection<TBase, TKeys, THasSelect, TAliasMapping, TSingle, TIntersectProps, TUnionProps> = {
	var _base : TBase;
	var _hasSelection : THasSelect;
	var _keys : TKeys;
	var _aliases : TAliasMapping;
	var _single : TSingle;
	var _intersectProps : TIntersectProps;
	var _unionProps : TUnionProps;
};