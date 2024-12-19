<div>
	<a href="/home">Home</a>
	<a href="/settings">Settings</a>
</div>

<style>
	div {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 70px;
		background-color: var(--ct-surface-accent);

		a {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;

			&:hover {
				background-color: var(--ct-surface);
				border-radius: var(--ct-border-radius);
			}
		}
	}
</style>
