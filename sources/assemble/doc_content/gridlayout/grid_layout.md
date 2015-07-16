##Basic principles
The structure of the layout is defined by the use of modifier classes. Modifiers are flags set on block or element to represent a different state or version and are always prefixed with `.is-*`. The layout modifiers are globally defined and can be
used on all elements of the page.

##The Grid
The layout grid targets several screen sizes. Our gridsystem takes an other approach then many other frameworks. RawBlock is not based on a 12 columns or 16 columns grid, but uses **percentage** as his base units.

We use 22 width units that are starting with `.is-size-*` ranging from **5%** to **100%** with **5%** increments.

Inside file `_rb_layout_config.scss` in directory `sources/sass/variables` you can find the variable `$breakpointConfig` where you can declare your breakpoints and give the specific **breakpoint-class**.

Property `all` is **mandatory** and defines the layout styles for all screensizes. The other properties can be changed or complemented. These properties also serve as de

	<div class="is-column-group">
		<div class="is-size-50"></div>
		<div class="is-size-50"></div>
	</div>


