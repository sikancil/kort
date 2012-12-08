Ext.data.JsonP.Kort_controller_Firststeps({"tagname":"class","name":"Kort.controller.Firststeps","extends":"Ext.app.Controller","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Kort.controller.Firststeps","code_type":"ext_define","members":{"cfg":[{"name":"control","tagname":"cfg","owner":"Kort.controller.Firststeps","meta":{"private":true},"id":"cfg-control"},{"name":"refs","tagname":"cfg","owner":"Kort.controller.Firststeps","meta":{"private":true},"id":"cfg-refs"}],"property":[],"method":[{"name":"getControl","tagname":"method","owner":"Kort.controller.Firststeps","meta":{},"id":"method-getControl"},{"name":"getRefs","tagname":"method","owner":"Kort.controller.Firststeps","meta":{},"id":"method-getRefs"},{"name":"onFirststepsFormSubmitButtonTap","tagname":"method","owner":"Kort.controller.Firststeps","meta":{"private":true},"id":"method-onFirststepsFormSubmitButtonTap"},{"name":"onUsernameTextfieldKeyUp","tagname":"method","owner":"Kort.controller.Firststeps","meta":{"private":true},"id":"method-onUsernameTextfieldKeyUp"},{"name":"setControl","tagname":"method","owner":"Kort.controller.Firststeps","meta":{},"id":"method-setControl"},{"name":"setRefs","tagname":"method","owner":"Kort.controller.Firststeps","meta":{},"id":"method-setRefs"},{"name":"userSuccessfullSavedHandler","tagname":"method","owner":"Kort.controller.Firststeps","meta":{"private":true},"id":"method-userSuccessfullSavedHandler"}],"event":[{"name":"userchange","tagname":"event","owner":"Kort.controller.Firststeps","meta":{},"id":"event-userchange"}],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Firststeps.js","href":"Firststeps.html#Kort-controller-Firststeps"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.app.Controller"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.app.Controller<div class='subclass '><strong>Kort.controller.Firststeps</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Firststeps.html#Kort-controller-Firststeps' target='_blank'>Firststeps.js</a></div></pre><div class='doc-contents'><p>Controller for firststeps overlay</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-control' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Firststeps'>Kort.controller.Firststeps</span><br/><a href='source/Firststeps.html#Kort-controller-Firststeps-cfg-control' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Firststeps-cfg-control' class='name expandable'>control</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{firststepsFormSubmitButton: {tap: 'onFirststepsFormSubmitButtonTap'}, usernameTextfield: {keyup: 'onUsernameTextfieldKeyUp'}}</code></p></div></div></div><div id='cfg-refs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Firststeps'>Kort.controller.Firststeps</span><br/><a href='source/Firststeps.html#Kort-controller-Firststeps-cfg-refs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Firststeps-cfg-refs' class='name expandable'>refs</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{firststepsPanel: '#firststepsPanel', usernameTextfield: '#firststepsPanel .textfield[name=username]', firststepsFormSubmitButton: '#firststepsFormSubmitButton'}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getControl' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Firststeps'>Kort.controller.Firststeps</span><br/><a href='source/Firststeps.html#Kort-controller-Firststeps-cfg-control' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Firststeps-method-getControl' class='name expandable'>getControl</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of control. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.controller.Firststeps-cfg-control\" rel=\"Kort.controller.Firststeps-cfg-control\" class=\"docClass\">control</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getRefs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Firststeps'>Kort.controller.Firststeps</span><br/><a href='source/Firststeps.html#Kort-controller-Firststeps-cfg-refs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Firststeps-method-getRefs' class='name expandable'>getRefs</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of refs. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Kort.controller.Firststeps-cfg-refs\" rel=\"Kort.controller.Firststeps-cfg-refs\" class=\"docClass\">refs</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onFirststepsFormSubmitButtonTap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Firststeps'>Kort.controller.Firststeps</span><br/><a href='source/Firststeps.html#Kort-controller-Firststeps-method-onFirststepsFormSubmitButtonTap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Firststeps-method-onFirststepsFormSubmitButtonTap' class='name expandable'>onFirststepsFormSubmitButtonTap</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onUsernameTextfieldKeyUp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Firststeps'>Kort.controller.Firststeps</span><br/><a href='source/Firststeps.html#Kort-controller-Firststeps-method-onUsernameTextfieldKeyUp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Firststeps-method-onUsernameTextfieldKeyUp' class='name expandable'>onUsernameTextfieldKeyUp</a>( <span class='pre'>field, e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>field</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setControl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Firststeps'>Kort.controller.Firststeps</span><br/><a href='source/Firststeps.html#Kort-controller-Firststeps-cfg-control' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Firststeps-method-setControl' class='name expandable'>setControl</a>( <span class='pre'>control</span> )</div><div class='description'><div class='short'>Sets the value of control. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.controller.Firststeps-cfg-control\" rel=\"Kort.controller.Firststeps-cfg-control\" class=\"docClass\">control</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>control</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setRefs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Firststeps'>Kort.controller.Firststeps</span><br/><a href='source/Firststeps.html#Kort-controller-Firststeps-cfg-refs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Firststeps-method-setRefs' class='name expandable'>setRefs</a>( <span class='pre'>refs</span> )</div><div class='description'><div class='short'>Sets the value of refs. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Kort.controller.Firststeps-cfg-refs\" rel=\"Kort.controller.Firststeps-cfg-refs\" class=\"docClass\">refs</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>refs</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-userSuccessfullSavedHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Firststeps'>Kort.controller.Firststeps</span><br/><a href='source/Firststeps.html#Kort-controller-Firststeps-method-userSuccessfullSavedHandler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Firststeps-method-userSuccessfullSavedHandler' class='name expandable'>userSuccessfullSavedHandler</a>( <span class='pre'>store, operation</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>operation</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-userchange' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Kort.controller.Firststeps'>Kort.controller.Firststeps</span><br/><a href='source/Firststeps.html#Kort-controller-Firststeps-event-userchange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Kort.controller.Firststeps-event-userchange' class='name expandable'>userchange</a>( <span class='pre'>eOpts</span> )</div><div class='description'><div class='short'>Fired when user gets changed ...</div><div class='long'><p>Fired when user gets changed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n</div></li></ul></div></div></div></div></div></div></div>"});