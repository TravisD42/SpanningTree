;

class Triangle extends Shape
{

    constructor()
    {
        super(true);
		this.CreateBuffers();
		
		this.triangle_vrts = [
			-0.5, -0.5, 0,
			0.5, -0.5, 0,
			0.0, 0.5, 0
		];

		// This makes the triangles
		this.indicies = [0, 1, 2];

		// This makes the line segements
		this.line_segment_indicies = [
			0, 1,
			1, 2,
			2, 0
		]

		this.colors = [
			1, 0, 0,
			0, 1, 0,
			0, 0, 1
		];

		this.normal_vrts = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1
		];

		this.normal_display_vrts = [
			-0.5, -0.5, 0,
			-0.5, -0.5, 0.1,
			0.5, -0.5, 0,
			0.5, -0.5, 0.1,			
			0.0, 0.5, 0,
			0.0, 0.5, 0.1
        ];

        // stuff
        this.BindBuffers();
    }

    Reshape(new_vertices){
		if (new_vertices.length != 9)
			throw 'Triangle::Reshape() - bad number of new vertices';

		this.triangle_vrts = new_vertices.slice();
		var v0 = this.triangle_vrts.slice(0,3);
		var v1 = this.triangle_vrts.slice(3,6);
		var v2 = this.triangle_vrts.slice(6,9);
		var v1v0 = Array(3);
		var v2v0 = Array(3);
		var n = Array(3);
		vec3.subtract(v1v0, v1, v0);
		vec3.subtract(v2v0, v2, v0);
		vec3.cross(n, v1v0, v2v0);
		vec3.normalize(n, n);
		this.normal_vrts = n.concat(n.concat(n));
		vec3.scale(n,n,0.1);
		this.normal_display_vrts = [];
		for (let i = 0; i < 3; i++)
		{
			var v = this.triangle_vrts.slice(i * 3, (i + 1) * 3);
			this.normal_display_vrts.push(v[0], v[1], v[2]);
			vec3.add(v, v, n);
			this.normal_display_vrts.push(v[0], v[1], v[2]);
		}
		this.BindBuffers();
	}
}