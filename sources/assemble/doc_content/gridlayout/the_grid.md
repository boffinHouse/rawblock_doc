##The Grid
The layout grid targets several screen sizes. Our gridsystem uses an other approach then many other frameworks. RawBlock is not based on a 12 columns or 16 columns grid, but uses **percentage** as his base units.

Inside file `_rb_layout_config.scss` in directory `sources/sass/variables` you can find the variable `$breakpointConfig` where you can declare your breakpoints and define the specific property. The property is also `breakpoint-class`, which will be suffixed to the `is-size-%` modifier.

The default and  **mandatory**  property is `all`. This property defines the layout styles for all screensizes. The other properties can be changed or complemented to your own requirement.

**Our default layout breakpoints are:**

- `is-size-%` for all screens widths
- `is-size-%-s` for screens width up to 768px.
- `is-size-%-m` for screens widths between 769px and 1024px.
- `is-size-%-l` for screens widths above 1025px.

###Columns
RawBlock uses 22 width units that are starting with `.is-size-%` ranging from **5%** to **100%** with **5%** increments.

All column element must be inside a `is-column-group` element.

	<div class="is-column-group">
		<div class="is-size-50">
			...
		</div>
		<div class="is-size-50">
			...
		</div>
	</div>
