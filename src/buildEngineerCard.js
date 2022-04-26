const buildEngineerCard = (engineer) => {
    return `                <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm border-primary">
                        <div class="card-header py-3 text-white bg-primary border-primary">
                            <div class="my-0 fw-normal">
                                <h4>${engineer.name}</h4>
                                <h4><i class="bi bi-eyeglasses"></i> Engineer</h4>
                            </div>
                        </div>
                        <div class="card-body">
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>ID: ${engineer.id}</li>
                                <li>Email: ${engineer.email}</li>
                                <li>Github: ${engineer.github}</li>
                            </ul>
                        </div>
                    </div>
                </div>`;
};

module.exports = buildEngineerCard;
