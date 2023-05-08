import Replicate from "replicate";
export default async function handler(req, res) {

    const key = "r8_E5AJmk47jPWXrb6pfkmawWa4sK49IeZ3njMl1"
    const replicate = new Replicate({
        auth: key,
    });

    const { method } = req;

    switch (method) {
        case "POST":
            const { name } = req.body;
            const output = await replicate.run(
                "replicate/oasst-sft-1-pythia-12b:28d1875590308642710f46489b97632c0df55adb5078d43064e1dc0bf68117c3",
                {
                    input: {
                        prompt: name
                    }
                }
            );
            return res.status(200).json({ output });
        default:
            return res.status(200).json({ name: "John Doe" });
    }


}