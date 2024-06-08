python_requirement(
    name="jmespath",
    requirements=["jmespath"],
)

python_requirements(
    name="root",
    source="pyproject.toml",
    overrides={
        "aws-lambda-powertools": {"dependencies": [":jmespath"]},
    },
)

package_json(
    name="package_json",
    scripts=[node_build_script("build", output_files=["handler/handler.zip"], extra_env_vars=["PATH"])],
    dependencies=["aws/javascript"]
)
